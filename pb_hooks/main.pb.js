onRecordCreateRequest((e) => {

    if (!e.auth) {
        throw new BadRequestError("Only authenticated users can create articles")
    }

    e.record.set("user", e.auth.get("id"))

    e.next()
}, "produtos")