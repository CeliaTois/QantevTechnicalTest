# Qantev Technical Test : Medical Provider Visualizer Application

I've created an application to visualize medical providers using React.JS. The main page shows a table in which are listed medical providers' name from a JSON file. Each name leads to a second page where we can find more of the medical provider's informations.

I've used React.JS, Saas, and Ant Design to implement, on the second page, arrows that lead back to the main page.

I've had trouble to implement a map that takes the medical provider's coordinate with leaflet. I've only created a map marker with number coordinates, which doesn't change depending on the medical provider. Same with the map popup.

## How to install my project

1. Download the code file
2. Open it in your text editor
3. Open your text editor's terminal
4. Type "npm i" to install the node modules
5. Type "npm start"

## How to use my project

To use the Medical Provider Visualizer Application, you only need to add objects to the package.json with new medical providers' informations.

If you want to add more informations than existing's, in the objects, create a new pair of "key": "value". Then in _Details.js_, inside the div named details, add a new paragraph or else. Inside the new element, create a span, in which we write the description of what will follows, and then, after the span, we write ${details.value}, value being the value of the "key": "value".

## Project
| List page | Details page |
|-----------|--------------|
|![Screenshot 2023-10-21 at 12-34-42 Medical Providers ⎟ Qantev](https://github.com/celia-tois/react-qantev-technical-test/assets/90208365/d17a3b61-ca72-4f74-b3b3-f87c11432b13)|![Screenshot 2023-10-21 at 12-34-59 Medical Providers ⎟ Qantev](https://github.com/celia-tois/react-qantev-technical-test/assets/90208365/e623850e-dadd-474c-8fec-156928619ce0)|

