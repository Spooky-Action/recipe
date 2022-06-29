import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tartiflette Sauvagine',
      "On pourrait penser que la tartiflette est un plat savoyard traditionnel. Mais, étonnamment, ce plat aurait été inventé dans les années 1980 par le Syndicat interprofessionnel reblochon pour augmenter les ventes de ce fromage. Depuis, on le trouve avec quelques variantes. Certains ajoutent des poivrons rouges ou du bouillon. Moi, j'aime bien utiliser un fromage québécois. Vous pouvez même prolonger la cuisson au four. Le fromage fondra et deviendra une sauce pour les pommes de terre. Vous n'aurez qu'à enlever la croûte du fromage sur le dessus et servir.",
      'https://glouton.b-cdn.net/u/recipes/thumbs/4322.jpg',
      [
        new Ingredient('Pomme de terre', 6),
        new Ingredient('Tranche de bacone', 4),
        new Ingredient('Oignons émincés', 2),
        new Ingredient('Meules de fromage La Sauvagine', 2)

      ]),
    new Recipe('Joue de Veau Braisées',
    "Les joues de boeuf et de veau sont devenues très populaires au menu des restos branchés. Pourquoi ne pas reproduire ce plat à la maison? En bouche, cette coupe de viande pourrait se rapprocher de la palette (cette viande à mijoter serait d'ailleurs un excellent substitut), mais avec encore plus de finesse. Nous préférons la joue de veau à celle du boeuf parce qu'elle est plus facile à trouver, que sa texture est plus fine et surtout qu'elle est plus petite (une joue donne environ 1 portion, c'est plus joli dans l'assiette). Dans les deux cas, il est préférable de la commander à votre boucher.",
    'https://images.ricardocuisine.com/services/recipes/277x375_3334.jpg',
    [
        new Ingredient('Joues de veau dégraissées', 6),
        new Ingredient('Carottes, pelées et hachées', 3),
        new Ingredient('Branches de céleri, hachées', 3),
        new Ingredient('Oignon, haché', 1),
        new Ingredient("Gousse d'ail, hachées", 3)
    ]),
    new Recipe('Tartare de boeuf',
    "On pourrait penser que la tartiflette est un plat savoyard traditionnel. Mais, étonnamment, ce plat aurait été inventé dans les années 1980 par le Syndicat interprofessionnel reblochon pour augmenter les ventes de ce fromage. Depuis, on le trouve avec quelques variantes. Certains ajoutent des poivrons rouges ou du bouillon. Moi, j'aime bien utiliser un fromage québécois. Vous pouvez même prolonger la cuisson au four. Le fromage fondra et deviendra une sauce pour les pommes de terre. Vous n'aurez qu'à enlever la croûte du fromage sur le dessus et servir.",
    'https://images.ricardocuisine.com/services/recipes/2129.jpg',
    [
        new Ingredient("Jaune d'oeuf", 1),
        new Ingredient('Intérieur de ronde de boeuf très frais', 1),
        new Ingredient('Échalote française hachée finement, hachées', 4)
    ]),
    new Recipe('Saumon en croute',
    "Voici une recette express qui, tout dépendant de sa présentation, peut être servie à la bonne franquette ou lors de grandes occasions. J’aime aussi cuisiner cette recette de façon à en faire des bouchées, c’est-à-dire en coupant des cubes de saumon et en divisant la croûte sur ceux-ci. La cuisson au four est beaucoup moins longue et le résultat est tout aussi bon. Sur un plateau, je vous jure que ces cubes partiront en quelques instants!",
    'https://tfpj-s3.troisfoisparjour.com/app/uploads/2018/08/21094707/saumon_croute_epices_l-718x1024.jpg',
    [
        new Ingredient("Filet de saumon d'environ 1,4 kg (3 lb) sans la peau", 1),
        new Ingredient('Botte d"aneth frais', 1),
        new Ingredient('Citrons, coupés en tranches', 2)
    ])
  ];



getRecipes() {
  return this.recipes.slice();
}


}
