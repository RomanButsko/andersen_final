export const maxSymbols = 160

export const createBaseTask = (value: string) => {
    return {
        id: new Date().getTime() * Math.random() * 100000,
        text: value,
        createdAt: new Date(),
        isCompleted: false,
        isFavourite: false,
    }
}
