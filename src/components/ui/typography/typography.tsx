import { FC, createElement } from 'react'

type TypographyProps = {
    tag?: 'p' | 'span'
    fontSize?: '14' | '20'
    lineHeight?: '20' | '28'
    letterSpacing?: '2' 
    children: React.ReactNode
    color?: string
}

export const Typography: FC<TypographyProps> = ({
    tag = 'span',
    fontSize,
    lineHeight,
    letterSpacing,
    color,
    children,
    ...props
}) => {
    return createElement(tag, {
        style: {
            fontSize: `${fontSize}px`,
            lineHeight: `${lineHeight}px`,
            letterSpacing: `${letterSpacing}%`,
            color: `${color}`,
        },
        ...props,
        children,
    })
}