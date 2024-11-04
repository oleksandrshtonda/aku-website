import classNames from 'classnames';

export class UtilsUI {
  static getClassNames(element: string, belongsTo: string, error: string ): string {
    return classNames(
      {[`${belongsTo}__${element}`]: belongsTo && belongsTo.length > 1},
      element,
      {[`${element}--error`]: error.length > 0}
    )
  }
}