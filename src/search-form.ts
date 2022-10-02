import { renderBlock } from './lib';

import date from "date-and-time";

const currentDate: Date | string = new Date()

let dateFrom: Date | string = new Date();
dateFrom = date.format(dateFrom, "YYYY-MM-DD");
console.log("dateFrom =", dateFrom);

let dateMin: Date | string = new Date();
dateMin = date.format(date.addDays(dateMin, 1), "YYYY-MM-DD");
console.log("dateMin =", dateMin);

let dateMax: Date | string = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0)
dateMax = date.format(dateMax, "YYYY-MM-DD");
console.log("dateMax =", dateMax);

if (+dateFrom < +dateMin) {
  dateFrom = dateMin;
} else if (+dateFrom > +dateMax) {
  dateFrom = dateMax;
} else {
  dateFrom
}

let dateTo: Date | string = new Date();
dateTo = date.format(date.addDays(dateTo, 2), "YYYY-MM-DD")
console.log("dateTo =", dateTo);

if (+dateTo < +dateFrom) {
  alert('Введите корректную дату')
} else if (+dateTo > +dateMax) {
  dateTo = dateMax;
} else {
  dateTo
}

export function renderSearchFormBlock(
  dateFrom: Date | string,
  dateMin: Date | string,
  dateMax: Date | string,
  dateTo: Date | string,
) {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">${dateFrom}</label>
            <input id="check-in-date" type="date" value="${dateFrom}" min="${dateMin}" max="${dateMax}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">${dateTo}</label>
            <input id="check-out-date" type="date" value="${dateTo}" min="${dateMin}" max="${dateMax}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
