export class Instructor {
    $key: string;
    username: string;
    name: string;
    url: string;
    imageUrl: string;
    phone: string;
    email: string;
    bio: string;


    static jsonArrayToObjectArray(array) : Instructor[] {
        return array.map(Instructor.jsonToObject);
    }

    static jsonToObject({$key, name, url, imageUrl,
            phone, email}) : Instructor {
        const instructor = new Instructor();
        instructor.$key = $key;
        instructor.name = name;
        instructor.url = url;
        instructor.imageUrl = imageUrl;
        instructor.phone = phone;
        instructor.email = email;
        

        return instructor;
    }
}