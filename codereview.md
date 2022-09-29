```
@Component({
selector: 'app-user-panel',
template: `<div class="user-panel">{{ getUserName() }}</button>`,
})
export class UserPanelComponent {
private _user;

constructor(
private _authService: AuthService,
) {
this._authService
.user
.subscribe(user => {
this._user = user;
});
}
public getUserName() {
return this._user.name;
}}
```

### Code Review Comments

this._authServie.user  -> this should be a method from Authservice this._authService.user().subscribe(user=>{ this._user = user})

calling function in template file like {{ getUserName }} is a bad practice, please avoid it. Also we have access to _user object, we can user {{ _user.name }} directly and removes 
the un-necessary funtion getUserName().
