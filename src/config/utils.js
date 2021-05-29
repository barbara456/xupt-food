
export const handleCategoryList = (title) => {
    return [
        {
            "title": `小份${title}`,
            "children":[
                {
                    "title": `小份${title}土豆`,
                    "children":[
                        {
                            "title":`小份${title}+土豆+金针菇`
                        }
                    ]
                },
                {
                    "title":`小份${title}+金针菇`
                }
            ]
        },
        {
            "title":`大份${title}`
        },
        {
            "title":`小份${title}`
        },
        {
            "title":`中份${title}`
        }

    ]
};