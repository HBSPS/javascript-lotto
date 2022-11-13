class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get lottoNumber() {
    return this.#numbers;
  }

  validate(numbers) {
    this.validLength(numbers);
    this.validOverlap(numbers);
    this.validFormat(numbers);
    this.validRange(numbers);
  }

  validLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validOverlap(numbers) {
    const lottoNumbersSet = new Set(numbers);

    if (lottoNumbersSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에는 중복이 있을 수 없습니다.');
    }
  }

  validFormat(numbers) {
    const reg = /^[0-9]+$/;

    numbers.forEach((item) => {
      if (!reg.test(item)) {
        throw new Error('[ERROR] 로또 번호는 숫자만 입력할 수 있습니다.');
      }
    })
  }

  validRange(numbers) {
    numbers.forEach((item) => {
      if (item < 1 || 45 < item) {
        throw new Error('[ERROR] 로또 숫자의 범위는 1부터 45까지 입니다.');
      }
    })
  }
}

module.exports = Lotto;
