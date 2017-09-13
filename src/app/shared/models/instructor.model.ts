export class Instructor {
    $key: string;
    name: string;
    url: string;
    imageUrl: string;

    static jsonArrayToObjectArray(array) : Instructor[] {
        return array.map(Instructor.jsonToObject);
    }

    static jsonToObject({$key, name, url, imageUrl}) : Instructor {
        const instructor = new Instructor();
        instructor.$key = $key;
        instructor.name = name;
        instructor.url = url;
        instructor.imageUrl = imageUrl;

        return instructor;
    }
}