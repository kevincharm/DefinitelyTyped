// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/FBXLoader.js

import { LoadingManager } from "./three-core";
import { Group, AnimationClip } from "./three-core";

export class FBXLoader {

    constructor(manager?: LoadingManager);
    manager: LoadingManager;

    load(url: string, onLoad: (group: FBXScene) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    parse(FBXText: string, resourceDirectory: string) : FBXScene;

}

export class FBXScene extends Group {
    animations: AnimationClip[]
}
