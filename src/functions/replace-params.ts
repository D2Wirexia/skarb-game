type ParamType = {
  [key: string]: string | number
}
export const replaceParams = (route: string, params: ParamType): string => {
  return Object.keys(params).reduce(
    (url: string, p: string) => url.replace(`:${p}`, params[p] as string),
    route,
  )
}
