const query = {
    //Photo
    getPhotos: "SELECT * FROM PHOTO",
    createPhoto: "INSERT INTO PHOTO (PHOTO_DATE_TIME, PHOTO_FILE_PATH, PHOTO_FORMAT, PHOTO_LOCATION, USER_ID) VALUES (@datetime, @filepath, @format, @location, @userid)",
    getPhotoByID: "SELECT * FROM PHOTO WHERE PHOTO_ID = @id",
    deletePhotoByID: "DELETE FROM PHOTO WHERE PHOTO_ID = @id",
    updatePhotoByID: "UPDATE PHOTO SET PHOTO_DATE_TIME = @datetime, PHOTO_FILE_PATH = @filepath, PHOTO_FORMAT = @format, PHOTO_LOCATION = @location, USER_ID = @userid WHERE PHOTO_ID = @id",

    //Album
    getAlbums: "SELECT * FROM ALBUM",
    createAlbum: "INSERT INTO ALBUM (ALBUM_NAME, ALBUM_DESCRIPTION, ALBUM_DATE_CREATED, ALBUM_CREATED_BY) VALUES (@name, @description, @adatetime, @createdBy)",
    getAlbumByID: "SELECT * FROM ALBUM WHERE ALBUM_ID = @id",
    deleteAlbumByID: "DELETE FROM PHOTO WHERE PHOTO_ID = @id"
}

module.exports = query;