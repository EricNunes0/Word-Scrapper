from lyricsgenius import Genius

class MusicLyrics():
	def get(self, input, author):
		genius = Genius("DL5P1FRB42fvs7MsJNlPYrlWCcRzKbBlRbrzMfy86ll2ZtvaC46KBglrzP0WCdTW")
		if author != None:
			artist = genius.search_artist(author, max_songs=1)
			if not author:
				print("Nenhum autor encontrado!")
				return None
			song = artist.song(input)
		else:
			try:
				song = genius.search_song(input)
			except:
				return None
		if not song:
			print("Nenhuma música encontrada!")
			return None
		return song.lyrics