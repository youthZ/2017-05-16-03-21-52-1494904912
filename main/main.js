module.exports = function main(email, suffixes) {
	var suffixe = email.split("@")[1];
	for (var index = 0; index < suffixes.length ; index++)
	{
		if(suffixe == suffixes[index])
		{
			return true;
		}
	}
	return false;
};

