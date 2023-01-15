// utils
const mod = (n:number, modulus:number) => ((n % modulus) + modulus) % modulus
const last = (arr:string[][]) => arr.slice(-1)[0]




// main logic
const createWordSpans = (text: string) => text
    .split(/(\s+)/)
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

// note that this rewrites the content of the element
export const  paginateByBoundingElement = (parent:HTMLDivElement, paddingY:number) => (text:string) => {
    parent.textContent = ''
    const { bottom } = parent.getBoundingClientRect()

    const pages:string[][] = [[]]

    for (const node of createWordSpans(text) as (HTMLSpanElement | Text)[]) {
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
