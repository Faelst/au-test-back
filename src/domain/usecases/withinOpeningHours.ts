export interface WithinOpeningHours {
  handle: ({
    inputTime,
    openTime,
    closeTime
  }: WithinOpeningHours.Params) => WithinOpeningHours.Result
}

export namespace WithinOpeningHours {
  export type Params = {
    inputTime: string
    openTime: string
    closeTime: string
  }

  export type Result = boolean
}
