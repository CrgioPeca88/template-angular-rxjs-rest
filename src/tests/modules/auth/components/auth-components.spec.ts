// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Assets
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from '@auth/components/login/login.component';
import { AuthInjectorService } from '@tcp-core/services/backend/injectors/auth.injector';
import { AuthInjectorServiceTest } from '@tests/shared/core/services/backend/injectors/auth-test.injector';
import loginComponentTests from './login/login.component.spec';

describe('*[AuthModule]: ----------------------------------------', () => {

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					SharedModule
				],
				declarations: [
					LoginComponent
				],
				providers: [
					{ provide: AuthInjectorService, useClass: AuthInjectorServiceTest }
				]
			}).compileComponents();
		}));

		loginComponentTests();

});
