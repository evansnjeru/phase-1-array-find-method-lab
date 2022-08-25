function isW(record) {
	return record.result === 'W';
}
function superbowlWin(record) {
	const x = record.find(isW);
	return x ? x.year : undefined;
}
