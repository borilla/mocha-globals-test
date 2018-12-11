before(() => {
	console.log('>>>>>>>> BEFORE  ALL <<<<<<<<');
});

beforeEach(() => {
	console.log('>>>>>>>> BEFORE EACH <<<<<<<<');
});

afterEach(() => {
	console.log('>>>>>>>> AFTER  EACH <<<<<<<<');
});

after(() => {
	console.log('>>>>>>>>  AFTER  ALL <<<<<<<<');
});
