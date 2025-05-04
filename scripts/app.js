let activeUserCount = 15;

const $reflesh = document.getElementById("btn-reflesh")
const $spinner = document.getElementById("spinner")
const $userCount = document.getElementById("user-count")
const $userNo = document.getElementById("user-no")
const $entry = document.getElementById("btn-entry")
const $exit = document.getElementById("btn-exit")

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
    $spinner.style.setProperty("display", "flex")
    setTimeout(() => {
        $spinner.style.setProperty("display", "none")
        decrementUserCount();
    }, 1500);
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
