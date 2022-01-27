import fs from "fs"
import path from "path";
import { DirectoryTraverser } from "../../src/directory_traverser/directory_traverser";
import { EvaluatorConf } from "../../src/conf/EvaluatorConf";

function createEmptyFile(filename: string) {
    if (!fs.existsSync(filename))
        fs.closeSync(fs.openSync(filename, 'w'));
}
function createDirectory(dirPath: string) {
    const options = { recursive: true };
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, options)
    }
}
beforeAll(() => {
    const basePath = "testDir/traverserTest/";
    const dirA = "dirA/", dirB = "dirB/", dirC = "dirC/", subDir = dirC + "subDir/";
    for (let p of [dirA, dirB, dirC, subDir]) {
        createDirectory(path.join(basePath, p));
    }

    createEmptyFile(path.join(basePath, "Main.java"));
    createEmptyFile(path.join(basePath, dirA, "moduleA.java"));
    createEmptyFile(path.join(basePath, dirA, "moduleB.java"));
    createEmptyFile(path.join(basePath, dirA, "irrelevant.txt"));


    createEmptyFile(path.join(basePath, dirB, "moduleC.java"));
    createEmptyFile(path.join(basePath, dirB, "Test1.java"));
    createEmptyFile(path.join(basePath, dirB, "test.java"));


    createEmptyFile(path.join(basePath, dirC, "anything.java"));
    createEmptyFile(path.join(basePath, dirC, "super.java"));
    createEmptyFile(path.join(basePath, dirC, "cool.java"));
    createEmptyFile(path.join(basePath, subDir, "inSubDir.java"));


});
test("Test default configuration", () => {
    const basePath = "testDir/traverserTest/";
    let traverser = new DirectoryTraverser(basePath, new EvaluatorConf());
    const expectedFileCount = 10;
    let files = traverser.getRelevantFiles();
    let actualCount = files.length;
    expect(actualCount).toBe(expectedFileCount);
});
test("test configuration with test files excluded", () => {
    const basePath = "testDir/traverserTest/";
    const rule = { exclude: ["*test*", "*Test*"], include: ["*java"] };
    let traverser = new DirectoryTraverser(basePath, rule);
    const expectedFileCount = 8;
    let actualCount = traverser.getRelevantFiles().length;
    expect(actualCount).toBe(expectedFileCount);
});
test("test configuration with dir excluded", () => {
    const basePath = "testDir/traverserTest/";
    const rule = { exclude: ["dirC/*"], include: ["*java"] };
    let traverser = new DirectoryTraverser(basePath, rule);
    const expectedFileCount = 7;
    let files = traverser.getRelevantFiles();
    let actualCount = files.length;
    expect(actualCount).toBe(expectedFileCount);
})

