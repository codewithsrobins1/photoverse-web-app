//Create Query to GET User
export const userQuery = (userId) => {
    //Grab a document of type user and where the id is === to userId
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}