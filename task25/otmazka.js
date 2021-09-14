let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
}
// meetup.place = 12;
meetup['place'] = 12;


console.log(meetup);
console.log(undefined === false);

let room = {
    number: 23
}
let meetup2 = {
    title: "Conference",
    participants: ["john", "ann"]
}
meetup2.place = 'room';
room.occupiedBy = 'meetup2';
console.log(meetup2);

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
};
let json = JSON.stringify(student);
// alert(typeof json);
// alert(json)

student['education'] = "school";
student.age = 21;
student['family'] = 4;
console.log(student);