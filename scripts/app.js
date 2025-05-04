let activeUserCount = 15;

const $reflesh = document.getElementById("btn-reflesh")
const $spinner = document.getElementById("spinner")
const $userCount = document.getElementById("user-count")
const $userNo = document.getElementById("user-no")
const $entry = document.getElementById("btn-entry")
const $exit = document.getElementById("btn-exit")

window.onload = async () => {
    $spinner.style.setProperty("display", "flex")
    $userNo.value = localStorage.getItem("userNo");        
    activeUserCount = await fetchUserCount();;
    $userCount.innerHTML = `${activeUserCount}人`;
    $spinner.style.setProperty("display", "none")
}

$reflesh.onclick = () => {
    $spinner.style.setProperty("display", "flex")
    setTimeout(() => {
        $spinner.style.setProperty("display", "none")
    }, 1500);
}

$entry.onclick = () => {
    if ($userNo.value === "") {
        alert("会員番号を入力して下さい。");
        return;
    }
    $spinner.style.setProperty("display", "flex")
    localStorage.setItem("userNo", $userNo.value);
    setTimeout(() => {
        $spinner.style.setProperty("display", "none")
        incrementUserCount();
    }, 1500);
}

$exit.onclick = () => {
    if ($userNo.value === "") {
        alert("会員番号を入力して下さい。");
        return;
    }
    localStorage.setItem("userNo", $userNo.value);
    $spinner.style.setProperty("display", "flex")
    setTimeout(() => {
        $spinner.style.setProperty("display", "none")
        decrementUserCount();
    }, 1500);
}

async function fetchUserCount()
{
    setTimeout(() => {
        return;
    }, 1500);
    return 12;
}

function incrementUserCount()
{
    activeUserCount++;
    $userCount.innerHTML = `${activeUserCount}人`;
}

function decrementUserCount()
{
    if (activeUserCount <= 0) {
        return;
    }
    activeUserCount--;
    $userCount.innerHTML = `${activeUserCount}人`;
}
