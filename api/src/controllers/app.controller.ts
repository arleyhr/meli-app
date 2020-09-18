import { JsonController, Get, Redirect } from 'routing-controllers';

@JsonController()
export class AppController {
  @Get('/')
  @Redirect('/docs')
  docs(): void {
    return;
  }

  /**
   * GET /about
   * @summary :v
   * @tags App
   * @return {object} 200 - success response
   */
  @Get('/about')
  about(): Object {
    return {
      name: 'Arley HR',
      type: 'FullStack Javascript Dev',
      needCoffee: true,
    };
  }
}
