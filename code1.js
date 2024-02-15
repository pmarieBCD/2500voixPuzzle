gdjs.puzzle_95introCode = {};
gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1= [];
gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects2= [];
gdjs.puzzle_95introCode.GDpuzzle_9595text_9595introObjects1= [];
gdjs.puzzle_95introCode.GDpuzzle_9595text_9595introObjects2= [];


gdjs.puzzle_95introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("puzzle_pret_jouer"), gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1.length;i<l;++i) {
    if ( gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1[k] = gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1[i];
        ++k;
    }
}
gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};

gdjs.puzzle_95introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects1.length = 0;
gdjs.puzzle_95introCode.GDpuzzle_9595pret_9595jouerObjects2.length = 0;
gdjs.puzzle_95introCode.GDpuzzle_9595text_9595introObjects1.length = 0;
gdjs.puzzle_95introCode.GDpuzzle_9595text_9595introObjects2.length = 0;

gdjs.puzzle_95introCode.eventsList0(runtimeScene);

return;

}

gdjs['puzzle_95introCode'] = gdjs.puzzle_95introCode;
