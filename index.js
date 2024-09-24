
const ACCESS_LEVELS = {
    NO_ACESS: {
        value: 0,
        label: "No access"
    },
    USER: {
        value: 1,
        label: "User"
    },
    ADMIN: {
        value: 2,
        label: "Admin"
    },

    levels: () => {
        return [ACCESS_LEVELS.NO_ACESS, ACCESS_LEVELS.USER, ACCESS_LEVELS.ADMIN];
    },
    findLevel: (value) => {
        return ACCESS_LEVELS.levels().find(level => level.value == value);
    },
    count: () => {
        return ACCESS_LEVELS.levels().length;
    }
};

const USERS = [
    {
        fullName: "Ricardo Alvarez",
        email: "ricardo.alvarez@zxc.com",
        accessLevel: ACCESS_LEVELS.ADMIN.value
    },
    {
        fullName: "Tina Mango",
        email: "tina.mango@zxc.com",
        accessLevel: ACCESS_LEVELS.USER.value
    },
    {
        fullName: "Bob Fowler",
        email: "bob.fowler@zxc.com",
        accessLevel: ACCESS_LEVELS.USER.value
    },
    {
        fullName: "Admin Bob",
        email: "bob.fowler1@zxc.com",
        accessLevel: ACCESS_LEVELS.ADMIN.value
    },
    {
        fullName: "Kevin Mitnick",
        email: "anon@anonymous.com",
        accessLevel: ACCESS_LEVELS.NO_ACESS.value
    },
    {
        fullName: "Platon Sviatoslav",
        email: "platon.sviatoslav@zxc.com",
        accessLevel: ACCESS_LEVELS.USER.value
    },
    {
        fullName: "Vanda Indrikis",
        email: "vanda.indrikis@zxc.com",
        accessLevel: ACCESS_LEVELS.USER.value
    }
];

fillDataTable();

function fillDataTable() {

    const dataTable = document.querySelector("table#data-table");
    if (!dataTable) return;

    USERS.forEach(user => {
        const row = document.createElement("tr");

        const fullNameCell = document.createElement("td");
        fullNameCell.innerText = user.fullName;
        row.appendChild(fullNameCell);

        const emailCell = document.createElement("td");
        emailCell.innerText = user.email;
        row.appendChild(emailCell);

        const accessLevelCell = document.createElement("td");
        const accessLevelControll = document.createElement("input");
        accessLevelControll.type = "range";
        accessLevelControll.step = 1;
        accessLevelControll.min = 0;
        accessLevelControll.max = ACCESS_LEVELS.count() - 1;
        accessLevelControll.value = user.accessLevel;
        accessLevelCell.appendChild(accessLevelControll);
        const accessLevelLabel = document.createElement("label");
        accessLevelLabel.innerText = ACCESS_LEVELS.findLevel(user.accessLevel).label;
        accessLevelCell.appendChild(accessLevelLabel);
        accessLevelControll.addEventListener("input", () => {
            user.accessLevel = accessLevelControll.value;
            accessLevelLabel.innerText = ACCESS_LEVELS.findLevel(user.accessLevel).label;
        })
        row.appendChild(accessLevelCell);

        const actionsCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "✏️";
        editButton.title = "Edit";
        editButton.addEventListener("click", () => alert("It's only PoC!"))
        actionsCell.appendChild(editButton);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.title = "Delete";
        deleteButton.addEventListener("click", () => alert("It's only PoC!"))
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        dataTable.appendChild(row);
    });
}