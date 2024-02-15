gdjs.GameSceneCode = {};
gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachIndex4 = 0;

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachObjects4 = [];

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTemporary4 = null;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.forEachTotalCount4 = 0;

gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects6= [];
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects1= [];
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects2= [];
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects3= [];
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects4= [];
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects5= [];
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects6= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects1= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects2= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects3= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects4= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5= [];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects6= [];
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects1= [];
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects2= [];
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects3= [];
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects4= [];
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects5= [];
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects6= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].returnVariable(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].returnVariable(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].getPointY("")));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\sounds\\dummie_sound.wav", 1, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595puzzle_95959595pieceObjects5Objects = Hashtable.newFrom({"obj_puzzle_piece": gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595puzzle_95959595pieceObjects5Objects);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects4, gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5);

/* Reuse gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5 */
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].setPosition((( gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5.length === 0 ) ? 0 :gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5[0].getPointX("")),(( gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5.length === 0 ) ? 0 :gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].returnVariable(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].getVariables().getFromIndex(2)).setNumber(1);
}
}}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].getVariableNumber(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].getVariableNumber(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5 */
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].setAnimationName("p" + "" + "_" + gdjs.evtTools.common.toString((gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5[i].getAnimation())));
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595puzzle_95959595pieceObjects2Objects = Hashtable.newFrom({"obj_puzzle_piece": gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2});
gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2 */

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].activateBehavior("Draggable", true);
}
}}
}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_holder"), gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects3);

for (gdjs.GameSceneCode.forEachIndex4 = 0;gdjs.GameSceneCode.forEachIndex4 < gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects3.length;++gdjs.GameSceneCode.forEachIndex4) {
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects4.length = 0;


gdjs.GameSceneCode.forEachTemporary4 = gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects3[gdjs.GameSceneCode.forEachIndex4];
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects4.push(gdjs.GameSceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameSceneCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9352892);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2);
{runtimeScene.getScene().getVariables().get("gs_count_puzzle_pieces").setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595puzzle_95959595pieceObjects2Objects));
}
{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9355844);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\sounds\\puzzle_pick.wav", 1, false, 100, 1);
}}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3, gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.pow((( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[0].getPointX("")) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[0].getVariables()).getFromIndex(0))), 2) + Math.pow((( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length === 0 ) ? 0 :gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[0].getPointY("")) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[0].getVariables()).getFromIndex(1))), 2) < 300);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[i].setPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[i].getVariables().getFromIndex(0))),(gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[i].getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4[i].setColor("255;255;255");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\sounds\\puzzle_pice.wav", 1, false, 100, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595puzzle_95959595pieceObjects1Objects = Hashtable.newFrom({"obj_puzzle_piece": gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595star_95959595effectObjects2Objects = Hashtable.newFrom({"obj_star_effect": gdjs.GameSceneCode.GDobj_9595star_9595effectObjects2});
gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{


const repeatCount2 = 6;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595star_95959595effectObjects2Objects, gdjs.randomInRange(128, 500), gdjs.randomInRange(80, 256), "PUZZLES");
}{/* Unknown object - skipped. */}}
}

}


};gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9361404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\sounds\\269194_puzzles_solved.wav", 1, false, 100, 1);
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}
{ //Subevents
gdjs.GameSceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].behaviorActivated("Draggable") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].setZOrder(1000);
}
}
{ //Subevents: 
gdjs.GameSceneCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].behaviorActivated("Draggable") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].setColor("150;150;150");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3[i].setZOrder(10);
}
}
{ //Subevents: 
gdjs.GameSceneCode.eventsList7(runtimeScene);} //Subevents end.
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_piece"), gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].behaviorActivated("Draggable")) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[k] = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDobj_95959595puzzle_95959595pieceObjects1Objects) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gs_count_puzzle_pieces"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1[i].setZOrder(10);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9349420);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj_puzzle_holder"), gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle_background"), gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects2[i].setAnimationName("p" + "" + "_" + (gdjs.RuntimeObject.getVariableString(gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects2[i].getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GameSceneCode.eventsList5(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList11(runtimeScene);
}


};gdjs.GameSceneCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList0(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList12(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects1.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects2.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects3.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects4.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects5.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595pieceObjects6.length = 0;
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects1.length = 0;
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects2.length = 0;
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects3.length = 0;
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects4.length = 0;
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects5.length = 0;
gdjs.GameSceneCode.GDpuzzle_9595backgroundObjects6.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects1.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects2.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects3.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects4.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects5.length = 0;
gdjs.GameSceneCode.GDobj_9595puzzle_9595holderObjects6.length = 0;
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects1.length = 0;
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects2.length = 0;
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects3.length = 0;
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects4.length = 0;
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects5.length = 0;
gdjs.GameSceneCode.GDobj_9595star_9595effectObjects6.length = 0;

gdjs.GameSceneCode.eventsList13(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
