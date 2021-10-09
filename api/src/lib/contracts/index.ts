
export type CreateBotProps ={
  url: string,
  timers: TimersProps
  clickElement?: ClickElementsProps[]
  typeElement?: TypeElementsProps[],
}

export type TimersProps = { 
  timestoped: number
  loops: number
}

export type ClickElementsProps ={
  element: string
  atribute: string
}

export type TypeElementsProps ={
  element: string
  atribute: string
  textValue: string
}