
type Entity = {
    id: string;
    data: Object;
}

const DBController = {
    create: (newEntity: Entity) => {
        if (localStorage.getItem(newEntity.id) != null) {
            throw new Error("Object already exists with id: " + newEntity.id)
        }

        let jsonData = JSON.stringify(newEntity.data)
        localStorage.setItem(newEntity.id, jsonData)
    },
    get: (fetchId: string): Entity => {
        let jsonData = localStorage.getItem(fetchId)
        if (jsonData == null) {
            throw new Error("Couldn't find object with id: " + fetchId)
        }
        return {id: fetchId, data: JSON.parse(jsonData)}
    },
    update: (updateId: string, data: Object): Entity => {
        if (localStorage.getItem(updateId) == null) {
            throw new Error("Object does not exist! Create it first! ID: " + updateId)
        }
        let jsonData = JSON.stringify(data)
        localStorage.setItem(updateId, jsonData)
        return {
            id: updateId,
            data: data
        }
    },
    delete: (deleteId: string) => {
        if (localStorage.getItem(deleteId) == null) {
            throw new Error("Can not delete object that does not exist! ID: " + deleteId)
        }
        localStorage.removeItem(deleteId)
    },
}

export default DBController