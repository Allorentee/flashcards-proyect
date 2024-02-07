export function localStorage() {
  const get = (name: string) => {
    const data = window.localStorage.getItem(name) as string
    return JSON.parse(data)
  }

  const set = (name: string, data: unknown) => {
    const value = JSON.stringify(data)
    window.localStorage.setItem(name, value)
  }

  return {
    get,
    set
  }
}
