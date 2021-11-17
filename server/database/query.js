const query = {
    //Photo
    getPhotos: "SELECT * FROM PHOTO",
    createPhoto: "INSERT INTO PHOTO (PHOTO_DATE_TIME, PHOTO_FILE_PATH, PHOTO_FORMAT, PHOTO_LOCATION, USER_ID, PHOTO_TAKEN_BY) VALUES (@datetime, @filepath, @format, @location, @userid, @takenby)",
    getPhotoByID: "SELECT * FROM PHOTO WHERE PHOTO_ID = @id",
    deletePhotoByID: "DELETE FROM PHOTO WHERE PHOTO_ID = @id",
    updatePhotoByID: "UPDATE PHOTO SET PHOTO_DATE_TIME = @datetime, PHOTO_FILE_PATH = @filepath, PHOTO_FORMAT = @format, PHOTO_LOCATION = @location, USER_ID = @userid, PHOTO_TAKEN_BY = @takenby WHERE PHOTO_ID = @id"
    //Album
}

module.exports = query;