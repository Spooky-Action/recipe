import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tartiflette Sauvagine', "On pourrait penser que la tartiflette est un plat savoyard traditionnel. Mais, étonnamment, ce plat aurait été inventé dans les années 1980 par le Syndicat interprofessionnel reblochon pour augmenter les ventes de ce fromage. Depuis, on le trouve avec quelques variantes. Certains ajoutent des poivrons rouges ou du bouillon. Moi, j'aime bien utiliser un fromage québécois. Vous pouvez même prolonger la cuisson au four. Le fromage fondra et deviendra une sauce pour les pommes de terre. Vous n'aurez qu'à enlever la croûte du fromage sur le dessus et servir.", 'https://glouton.b-cdn.net/u/recipes/thumbs/4322.jpg'),
    new Recipe('Joue de Veau Braisées', "Les joues de boeuf et de veau sont devenues très populaires au menu des restos branchés. Pourquoi ne pas reproduire ce plat à la maison? En bouche, cette coupe de viande pourrait se rapprocher de la palette (cette viande à mijoter serait d'ailleurs un excellent substitut), mais avec encore plus de finesse. Nous préférons la joue de veau à celle du boeuf parce qu'elle est plus facile à trouver, que sa texture est plus fine et surtout qu'elle est plus petite (une joue donne environ 1 portion, c'est plus joli dans l'assiette). Dans les deux cas, il est préférable de la commander à votre boucher.", 'https://images.ricardocuisine.com/services/recipes/277x375_3334.jpg'),
    new Recipe('Tartare de boeuf', "On pourrait penser que la tartiflette est un plat savoyard traditionnel. Mais, étonnamment, ce plat aurait été inventé dans les années 1980 par le Syndicat interprofessionnel reblochon pour augmenter les ventes de ce fromage. Depuis, on le trouve avec quelques variantes. Certains ajoutent des poivrons rouges ou du bouillon. Moi, j'aime bien utiliser un fromage québécois. Vous pouvez même prolonger la cuisson au four. Le fromage fondra et deviendra une sauce pour les pommes de terre. Vous n'aurez qu'à enlever la croûte du fromage sur le dessus et servir.", 'https://images.ricardocuisine.com/services/recipes/2129.jpg'),
    new Recipe('Joue de Veau Braisées', "Voici une recette express qui, tout dépendant de sa présentation, peut être servie à la bonne franquette ou lors de grandes occasions. J’aime aussi cuisiner cette recette de façon à en faire des bouchées, c’est-à-dire en coupant des cubes de saumon et en divisant la croûte sur ceux-ci. La cuisson au four est beaucoup moins longue et le résultat est tout aussi bon. Sur un plateau, je vous jure que ces cubes partiront en quelques instants!", 'https://tfpj-s3.troisfoisparjour.com/app/uploads/2018/08/21094707/saumon_croute_epices_l-718x1024.jpg')
  ];



getRecipes() {
  return this.recipes.slice();
}


}
