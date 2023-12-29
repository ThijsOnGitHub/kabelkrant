import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"
import { FormItem } from "../formItem"
import { FormField } from "../ui/form"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { TimesEditor } from "./timesEditor"
import { ProgrammaFormSchema, schema } from "../../type/programFormName"
import { days } from "../../type/days"
import { useEffect, useState } from "react"
import { FilesWithMetadata } from "../../../events"

export interface ProgramFormProps {
    value: ProgrammaFormSchema
    onSubmit: (data: ProgrammaFormSchema) => void
}

export const ProgramForm: React.FC<ProgramFormProps> = ({value, onSubmit}) => {
    const { register, handleSubmit, control, setValue, watch, reset } = useForm<ProgrammaFormSchema>({
        resolver: value ? zodResolver(schema) : undefined,
    })
    const [filesWithMetadata, setFilesWithMetadata] = useState<FilesWithMetadata[]>([])

    useEffect(() => {
        setTimeout(() => {
            reset(value)
        },1)
    }, [value])

    async function getFiles() {
        const files = await window.electronApi.getFilesInFolder(watch().path)
            console.log(files)
            setFilesWithMetadata(files)
    }

    useEffect(() => {
        getFiles()
    }, [watch().path])

    const { fields, append, remove } = useFieldArray({
        name: "planning",
        control,
    })

    function save() {
        handleSubmit(onSubmit)()
    }

    const width = 130

    async function selectFolder() {
        setValue("path", await window.electronApi.selectFolder())
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <FormItem labelWidth={width} label="Programma titel">
                    <Input {...register("programName")} />
                </FormItem>
                <FormItem labelWidth={width} label="Map">
                    <Input {...register("path")} readOnly />
                    <Button style={{ width: "fit-content" }} color="primary" className="" onClick={selectFolder}>Map kiezen</Button>
                </FormItem>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Uitzendingen
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    {
                        fields.length === 0 && <div className="text-center">Geen uitzendingen</div>
                    }
                    {
                        fields.length > 0 && fields.map((field, index) => {
                            return (
                                <Card key={field.id} className="p-4">
                                    <div key={field.id} className="flex flex-col gap-2">
                                        {/*<FormItem labelWidth={width} label={"Datum"}>
                                            <DatePicker date={watch(`planning.${index}.start`)} setDate={(date) => {
                                                console.log(date)
                                                setValue(`planning.${index}.start`, date ?? new Date())
                                            }} />
                                        </FormItem>
                                        <FormItem labelWidth={width} label="Einde">
                                            <Input {...register(`planning.${index}.end` as const)} />
                                        </FormItem>*/}
                                        <FormItem labelWidth={width} label="Dagen">
                                                <FormField control={control}  name={`planning.${index}.days`} render={
                                                    ({ field }) => (
                                                        <div className="flex flex-row gap-2">
                                                            { days.map((day) => {
                                                                return (
                                                                    <div key={day.name} className="flex items-center gap-2">
                                                                        <Checkbox checked={ field?.value?.includes(day?.value)} onCheckedChange={(checked) =>{
                                                                            if(checked){
                                                                                field.onChange([...field.value,day.value])
                                                                                return
                                                                            }
                                                                            field.onChange(field.value.filter((v:number) => v !== day.value))
                                                                        } } />
                                                                        <div>{day.name}</div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                } />
                                        </FormItem>
                                        <FormItem labelWidth={width} label="Tijden">
                                            <TimesEditor index={index} control={control} />
                                        </FormItem>
                                        <Button style={{ width: 45, height: 45 }} onClick={() => remove(index)}><Trash2 className="h-4 w-4" /></Button>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </CardContent>
                <CardFooter>
                    <Button onClick={() => append({
                        days: [],
                        times: ["00:00:00"]
                    })} >+</Button>
                </CardFooter>
            </Card>
            <Button onClick={save}>Save</Button>
            <div>
                {JSON.stringify(filesWithMetadata)}
            </div>
            {watch() && <pre>{JSON.stringify(watch(), null, 2)}</pre>}
        </div>
    )
}