import {RecipeModel} from "./schema/recipe.schema";

const printRecipe = (recipe: RecipeModel) => {
    // console.log(`Title: -----------------------------`);
    console.log(recipe.title);
    // console.log(``);

    // console.log(`Ingredients: -----------------------------`);
    // recipe.ingredients.forEach(ingredient => {
    //     if(ingredient.quantity) {
    //         console.log(`${ingredient.quantity} ${ingredient.uom} ${ingredient.name}`);
    //     } else {
    //         console.log(`${ingredient.name} : `);
    //     }
    // });
    // console.log('');
    //
    // console.log(`Url: -----------------------------`);
    // console.log((recipe as any).source?.url);
    //
    // console.log(`Full Data: -----------------------------`);
    // console.log(recipe.toString());
    //
    // // console.log()
}

export default printRecipe;
