const fireButton = document.getElementById("fire-button")
const waterButton = document.getElementById("water-button")
const lightningButton = document.getElementById("lightning-button")
const grassButton = document.getElementById("grass-button")

const fireSlider = document.getElementById("fire-slider")
const waterSlider = document.getElementById("water-slider")
const lightningSlider = document.getElementById("lightning-slider")
const grassSlider = document.getElementById("grass-slider")

waterButton.addEventListener("click", sectionSwitchWater)
fireButton.addEventListener("click", sectionSwitchFire)
lightningButton.addEventListener("click", sectionSwitchLightning)
grassButton.addEventListener("click", sectionSwitchGrass)

function sectionSwitchWater() {
    fireSlider.style.display = "none"
    grassSlider.style.display = "none"
    lightningSlider.style.display = "none"

    waterSlider.style.display = "flex"
}

function sectionSwitchFire() {
    waterSlider.style.display = "none"
    grassSlider.style.display = "none"
    lightningSlider.style.display = "none"

    fireSlider.style.display = "flex"
}

function sectionSwitchLightning() {
    waterSlider.style.display = "none"
    grassSlider.style.display = "none"
    fireSlider.style.display = "none"

    lightningSlider.style.display = "flex"
}

function sectionSwitchGrass() {
    waterSlider.style.display = "none"
    lightningSlider.style.display = "none"
    fireSlider.style.display = "none"

    grassSlider.style.display = "flex"
}