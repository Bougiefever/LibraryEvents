export class Instructor {
    $key: string;
    username: string;
    name: string;
    imageUrl: string;
    phone: string;
    email: string;
    bio: string;


    static jsonArrayToObjectArray(array) : Instructor[] {
        return array.map(Instructor.jsonToObject);
    }

    static jsonToObject({$key, bio, username, name, imageUrl,
            phone, email}) : Instructor {
        console.log('json to instructor: ' + $key + ', bio: ' + bio, ' username: ' + username);
        const instructor = new Instructor();
        instructor.$key = $key;
        instructor.name = name;
        instructor.imageUrl = imageUrl;
        instructor.phone = phone;
        instructor.email = email;
        instructor.username = username;
        instructor.bio = bio;
        console.log(instructor);
        return instructor;
    }
}