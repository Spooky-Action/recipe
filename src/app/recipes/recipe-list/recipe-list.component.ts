import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tartiflette Sauvagine', "On pourrait penser que la tartiflette est un plat savoyard traditionnel. Mais, étonnamment, ce plat aurait été inventé dans les années 1980 par le Syndicat interprofessionnel reblochon pour augmenter les ventes de ce fromage. Depuis, on le trouve avec quelques variantes. Certains ajoutent des poivrons rouges ou du bouillon. Moi, j'aime bien utiliser un fromage québécois. Vous pouvez même prolonger la cuisson au four. Le fromage fondra et deviendra une sauce pour les pommes de terre. Vous n'aurez qu'à enlever la croûte du fromage sur le dessus et servir.", 'https://glouton.b-cdn.net/u/recipes/thumbs/4322.jpg'),
    new Recipe('Joue de Veau Braisées', "Les joues de boeuf et de veau sont devenues très populaires au menu des restos branchés. Pourquoi ne pas reproduire ce plat à la maison? En bouche, cette coupe de viande pourrait se rapprocher de la palette (cette viande à mijoter serait d'ailleurs un excellent substitut), mais avec encore plus de finesse. Nous préférons la joue de veau à celle du boeuf parce qu'elle est plus facile à trouver, que sa texture est plus fine et surtout qu'elle est plus petite (une joue donne environ 1 portion, c'est plus joli dans l'assiette). Dans les deux cas, il est préférable de la commander à votre boucher.", 'https://images.ricardocuisine.com/services/recipes/277x375_3334.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
