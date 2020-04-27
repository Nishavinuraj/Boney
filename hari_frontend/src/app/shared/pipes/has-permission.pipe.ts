import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'hasPermission'
})
export class HasPermissionPipe implements PipeTransform {
  constructor(private authService: AuthService) {}

  transform(value: string[]): any {
    if (!value) {
      return false;
    }

    return this.authService.hasAccess(value);
  }
}
