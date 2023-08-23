from mrjob.job import MRJob
from mrjob.step import MRStep
import re
palavra_regex = re.compile(r"[\w']+")

class WordAmount(MRJob):
    print("『🎡』WordAmount codando")
    def mapper(self, _, line):
        for p in palavra_regex.findall(line):
            yield (p.lower(), 1)

    def reducer(self, p, qtd):
        yield (p, sum(qtd))

    def steps(self):
        return ([
            MRStep(mapper=self.mapper, reducer=self.reducer),
        ])

if __name__ == "__main__":
    WordAmount.run()