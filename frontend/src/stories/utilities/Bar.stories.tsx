import {Bar, BarProps} from "../../component/slideUtilities/bar";
import {StoryObj} from "@storybook/react";
import {useEffect, useState} from "react";

export default {
    component: Bar
}

export const Default : StoryObj<BarProps> = {
    args:{
        percentage: 60
    },
    parameters:{
        backgrounds: {
            default: 'dark'
        }
    },
    decorators: [
        (Story) =>
            <div style={{width:"100%"}}>
                <Story/>
            </div>
    ]
}

export const Fill : StoryObj<BarProps > = {
    ...Default,

    argTypes:{
           percentage: {
               table: {
                   disable: true
               }
           },

    },
    decorators: [
        (Story,c) =>{
            const [percentage, setPercentage] = useState(0)
            useEffect(() => {
                const interval = setInterval(() => {
                    if(percentage < 100) {
                        setPercentage(percentage => percentage + 1)
                        return
                    }
                    clearInterval(interval)
                }, 500)
                return () => clearInterval(interval)
            }, [])
            return <div style={{width:"100%"}}>
                <Story args={{percentage: percentage}} />
            </div>
        }
    ],
}