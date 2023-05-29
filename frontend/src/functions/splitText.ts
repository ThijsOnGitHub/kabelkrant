import { fill, max } from "lodash"
import { createElement } from "react"

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
        cloneElement.style.maxWidth = width + 'px'
        Object.entries(cloneElement.style).forEach(([key,value]) => {
            cloneElement.style.setProperty(key,value)
        })
        if(styleClass) cloneElement.classList.add(styleClass)
        document.body.appendChild(cloneElement)
        const res =paginateByBoundingElement(cloneElement,0,height,breakType)(text)
        cloneElement.remove()
        return res
    }
}

export const paginateTextByElement = (parent:HTMLDivElement, paddingY:number,breakType?:BREAK_TYPE)=>{
    return paginateTextBySize(parent.clientWidth, parent.clientHeight - paddingY,parent.style,parent.className,breakType)
}

// note that this rewrites the content of the element
export const  paginateByBoundingElement = (parent:HTMLDivElement, paddingY:number,maxHeight:number, breakType?:BREAK_TYPE, ) => (text:string) => {
    // Parse html string to DOM
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, 'text/html')
    const { body } = doc
    
    // Create a empty element to fill with the content
    let nodes: (Node | ChildNode)[] = Array.from(body.childNodes)
    nodes = nodes.map(node=> {
        if (node instanceof Text) {
            return createWordSpans(node.textContent ?? '',breakType) as Node[]
        }
        return node
    }).flat()
    const pages: string[] = []
    for (const child of nodes) {
        parent.appendChild(child)
        if(parent.getBoundingClientRect().height > maxHeight){
            parent.removeChild(child)
            pages.push(parent.innerHTML)
            parent.textContent = '' //parent.cloneNode(true) as HTMLDivElement
            parent.appendChild(child)
        }
    }
    pages.push(parent.innerHTML)
    return pages
}
