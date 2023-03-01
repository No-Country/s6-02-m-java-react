export const dificulty = [
    {
        label: 'Básico',
        value: 'BASIC',
    },
    {
        label: 'Intermedio',
        value: 'INTERMEDIATE'
    },
    {
        label: 'Avanzado',
        value: 'ADVANCED'
    },
]

export const dificultyValues = dificulty.map((d) => d.value);

export const categories = [
    {
        label: 'Frontend',
        value: 'FRONT_END'
    },
    {
        label: 'Backend',
        value: 'BACK_END',
    }, 
    {
        label: 'FullStack',
        value: 'FULL_STACK',
    },
    {
        label: 'Devops',
        value: 'DEV_OPS',
    }
]

export const categoriesValues = categories.map((c) => c.value);

export const hours = ['1,10', '10,20', '20,40', '40']