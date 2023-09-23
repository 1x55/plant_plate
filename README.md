# PlantPlate

Plant Plate allows users to check if a product is vegetarian or not. Here's a brief summary of the app and its functions:

**Key Features:**

- Input Box: Users can enter a 12-digit UPC barcode number in the input box to retrieve product information.
- Get Value Button: Clicking the "Get Value" button triggers the product information retrieval process from the Open Food Facts database.
- Product Information Display:Once the product information is retrieved, the app displays the product's name and an image.
- Ingredient Table: The app lists the ingredients of the product in a table, along with their vegetarian status. Vegetarian ingredients are color-coded for easy identification.
- Theme Selection: Users can switch between dark mode and light mode to customize the application's appearance.

**JavaScript Functions:**

- `getFetch()`: This function retrieves product data from the Open Food Facts database based on the provided barcode. It validates the barcode length, displays product information, and lists ingredients.

- `ProductInfo` Class: This class is used to create objects that store product information. It includes methods to display product information and list ingredients.

**Link to project:** 
- https://plant-plate.netlify.app/

**Tech used:** 
- HTML, CSS, JavaScript, Tailwind CSS, DaisyUI and CSS Theme-Change

## Lessons Learned:
- API Integration: successfully integrated the Open Food Facts API (https://world.openfoodfacts.org) to fetch and display product information based on barcode inputs, demonstrating your ability to work with external data sources.

- Handling Row Deletion: discovered that using i++ in a loop to delete rows can lead to skipping rows, causing unintended deletions.
The solution you learned is to iterate through the rows in reverse order (i-- or for (let i = table.rows.length - 1; i >= 1; i--)) to prevent skipping and accurately delete rows from the table. This approach ensures that all rows are properly removed without any unintended omissions.

- Error Handling: implemented error handling to provide user-friendly error messages, such as alerting users when the barcode is not 12 characters long.

- Data Validation: validated user input by checking if the barcode is exactly 12 characters long, ensuring that only valid inputs are processed.

