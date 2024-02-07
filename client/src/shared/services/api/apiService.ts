export async function get({ url }: { url: string }) {
  try {
    const response = await fetch(url)
    const responseJson = response.json()
    return responseJson
  } catch (e) {
    throw new Error((e as Error).message)
  }
}

export async function post({ url, body }: { url: string; body: unknown }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  try {
    const response = await fetch(url, options)
    const responseJson = response.json()
    return responseJson
  } catch (e) {
    throw new Error((e as Error).message)
  }
}

export async function put({ url, body }: { url: string; body: unknown }) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  try {
    const response = await fetch(url, options)
    const responseJson = response.json()
    return responseJson
  } catch (e) {
    throw new Error((e as Error).message)
  }
}

export async function apiDelete({ url }: { url: string }) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  }
  try {
    await fetch(url, options)
  } catch (e) {
    throw new Error((e as Error).message)
  }
}
