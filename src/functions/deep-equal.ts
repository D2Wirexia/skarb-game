export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false
    }

    const sortedObj1 = [...obj1].sort(compareObjects)
    const sortedObj2 = [...obj2].sort(compareObjects)

    for (let i = 0; i < sortedObj1.length; i++) {
      if (!deepEqual(sortedObj1[i], sortedObj2[i])) {
        return false
      }
    }
    return true
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}

const compareObjects = (a: any, b: any): number => {
  const keysA = Object.keys(a).sort()
  const keysB = Object.keys(b).sort()

  for (let i = 0; i < Math.min(keysA.length, keysB.length); i++) {
    if (a[keysA[i]] < b[keysB[i]]) {
      return -1
    }
    if (a[keysA[i]] > b[keysB[i]]) {
      return 1
    }
  }

  return keysA.length - keysB.length
}
