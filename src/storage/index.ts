import localforage from 'localforage'

export async function getItem <T> (key: string) {
  const item = await localforage.getItem<T>(key)

  if (!item) {
    return null
  }

  return item
}

export async function setItem <T> (key: string, data: T) {
  await localforage.setItem<T>(key, data)
}

export async function removeItem (key: string) {
  await localforage.removeItem(key)
}
