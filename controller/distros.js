let distros = [
    {
        id: 1,
        name: "Debian",
        keypoints: "Rock stable distro"
    },
    {
        id: 2,
        name: "Ubuntu",
        keypoints: "Beginner friendly"
    },
    {
        id: 3,
        name: "Arch",
        keypoints: "KISS"
    },
]

const getAllDistros = async () => {
    return distros
}

const getDistro = async (req) => {
    return distros[req.params.id - 1]
}

module.exports = {
    getAllDistros,
    getDistro
}