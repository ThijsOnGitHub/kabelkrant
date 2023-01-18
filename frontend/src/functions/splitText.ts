// utils
const mod = (n:number, modulus:number) => ((n % modulus) + modulus) % modulus
const last = (arr:string[][]) => arr.slice(-1)[0]



export enum BREAK_TYPE {
    WORD = 'word',
    SENTENCE = 'sentence',
}

// main logic
const createWordSpans = (text: string,breakType:BREAK_TYPE = BREAK_TYPE.WORD) => {
    let regex = /(\n+)/
    switch (breakType) {
        case BREAK_TYPE.SENTENCE:
            regex = /(\n+)/

    }

    return text
        .split(regex)
        .map((str, idx) => {
            if (!str) return null

            if (idx % 2) {
                return document.createTextNode(str)
            } else {
                const span = document.createElement('span')
                span.textContent = str

                return span
            }
        })
        .filter(Boolean)
}

export const measureTextHeight = (text: string, width:string,element?:Partial<CSSStyleDeclaration>,styleClass?: string) => {
    const container = document.createElement('div')
    container.innerHTML = text
    container.style.width = width
    Object.entries(container.style).forEach(([key,value]) => {
        container.style.setProperty(key,value)
    })
    if(styleClass) container.classList.add(styleClass)
    document.body.appendChild(container)
    const height = container.offsetHeight
    document.body.removeChild(container)

    return height
}
export const paginateTextBySize = (width: number, height:number,style?: Partial<CSSStyleDeclaration>,styleClass?: string, breakType?:BREAK_TYPE) => {
    return (text:string) => {
        const cloneElement = document.createElement("div") as HTMLDivElement
        cloneElement.style.minWidth = width + 'px'
        cloneElement.style.minHeight = height + 'px'
        cloneElement.style.maxWidth = width + 'px'
        cloneElement.style.maxHeight = height + 'px'
        Object.entries(cloneElement.style).forEach(([key,value]) => {
            cloneElement.style.setProperty(key,value)
        })
        if(styleClass) cloneElement.classList.add(styleClass)
        document.body.appendChild(cloneElement)
        const res =paginateByBoundingElement(cloneElement,0,breakType)(text)
        cloneElement.remove()
        return res
    }
}

export const paginateTextByElement = (parent:HTMLDivElement, paddingY:number,breakType?:BREAK_TYPE)=>{
    return paginateTextBySize(parent.clientWidth, parent.clientHeight - paddingY,parent.style,parent.className,breakType)
}

// note that this rewrites the content of the element
export const  paginateByBoundingElement = (parent:HTMLDivElement, paddingY:number, breakType?:BREAK_TYPE) => (text:string) => {
    parent.textContent = ''
    const { bottom } = parent.getBoundingClientRect()

    const pages:string[][] = [[]]

    for (const node of createWordSpans(text,breakType) as (HTMLSpanElement | Text)[]) {
            parent.appendChild(node)
            if (node.nodeType === Node.ELEMENT_NODE) {
                    const rect = (node as HTMLSpanElement).getBoundingClientRect()
                    if (rect.bottom + paddingY > bottom) {
                        pages.push([node.textContent || ''])
                        parent.textContent = ''
                        parent.appendChild(node)
                    } else {
                        last(pages).push(node.textContent||'')
                    }
            } else {
                last(pages).push((node as Text).data)
            }
    }
    return pages.map(page => page.join(''))
}
