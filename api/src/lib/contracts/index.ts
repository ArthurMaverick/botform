
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
  clickElement: string
  ClickAtribute: string
}

export type TypeElementsProps ={
  typeElement: string
  typeAtribute: string
  textValue: string
}