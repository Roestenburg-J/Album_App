INSERT INTO [PHOTO] 
            ([PHOTO_DATE_TIME],
            [PHOTO_FILE_PATH],
            [PHOTO_FORMAT],
            [PHOTO_LOCATION],
            [PHOTO_TAKEN_BY])
VALUES ([@photoDateTime],
        [@photoFilePath],
        [@photoFormat],
        [@photoLocation],
        [@photoTakenBy])